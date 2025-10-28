import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

// تم سفارشی برای هماهنگی با طراحی سایت
const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#2b6cb0',
      700: '#2c5282',
    },
  },
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // اینجا می‌توانید منطق لاگین (مثل ارسال به API) را اضافه کنید
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
      >
        <Box
          p={8}
          maxW="400px"
          w="full"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
        >
          <VStack spacing={4} align="stretch">
            <Heading fontSize="2xl" textAlign="center" color="brand.900">
              ورود به حساب کاربری
            </Heading>
            <Text textAlign="center" color="gray.600">
              لطفاً اطلاعات خود را وارد کنید
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl id="email" isRequired>
                <FormLabel>ایمیل</FormLabel>
                <Input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  focusBorderColor="brand.800"
                />
              </FormControl>
              <FormControl id="password" isRequired mt={4}>
                <FormLabel>رمز عبور</FormLabel>
                <Input
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  focusBorderColor="brand.800"
                />
              </FormControl>
              <Button
                mt={6}
                colorScheme="brand"
                w="full"
                type="submit"
                _hover={{ bg: 'brand.700' }}
              >
                ورود
              </Button>
            </form>
            <Text textAlign="center" color="gray.500" fontSize="sm">
              حساب کاربری ندارید؟{' '}
              <Link color="brand.800" href="/signup">
                ثبت‌نام کنید
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;