# ErrorOutline


```text
material/Alert/ErrorOutline
```

```text
include('material/Alert/ErrorOutline')
```



| Illustration | ErrorOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Alert/ErrorOutline.png) | ![illustration for ErrorOutline](../../material/Alert/ErrorOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ErrorOutlineXs>`
- `<$ErrorOutlineSm>`
- `<$ErrorOutlineMd>`
- `<$ErrorOutlineLg>`





## ErrorOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ErrorOutline
include('material/Alert/ErrorOutline')

' renders the element
ErrorOutline('ErrorOutline', 'Error Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ErrorOutline
include('material/Alert/ErrorOutline')

' renders the element
ErrorOutline('ErrorOutline', 'Error Outline', 'an optional tech label', 'an optional description')
@enduml
```

