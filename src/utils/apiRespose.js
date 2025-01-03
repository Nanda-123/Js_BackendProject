
/**
 * The ApiResponse class is a utility for creating standardized responses in an application, 
 * particularly in APIs. It structures the response to ensure consistency and clarity, 
 * making it easier to manage and understand the returned data.
 */
class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }