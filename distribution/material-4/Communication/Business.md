# Business


```text
material-4/Communication/Business
```

```text
include('material-4/Communication/Business')
```



| Illustration | Business |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Business.png) | ![illustration for Business](../../material-4/Communication/Business.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusinessXs>`
- `<$BusinessSm>`
- `<$BusinessMd>`
- `<$BusinessLg>`





## Business

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Business
include('material-4/Communication/Business')

' renders the element
Business('Business', 'Business', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Business
include('material-4/Communication/Business')

' renders the element
Business('Business', 'Business', 'an optional tech label', 'an optional description')
@enduml
```

