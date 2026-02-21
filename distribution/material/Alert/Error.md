# Error


```text
material/Alert/Error
```

```text
include('material/Alert/Error')
```



| Illustration | Error |
| :---: | :---: |
| ![illustration for Illustration](../../material/Alert/Error.png) | ![illustration for Error](../../material/Alert/Error.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ErrorXs>`
- `<$ErrorSm>`
- `<$ErrorMd>`
- `<$ErrorLg>`





## Error

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Error
include('material/Alert/Error')

' renders the element
Error('Error', 'Error', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Error
include('material/Alert/Error')

' renders the element
Error('Error', 'Error', 'an optional tech label', 'an optional description')
@enduml
```

