# AutoFixNormal


```text
material/Image/AutoFixNormal
```

```text
include('material/Image/AutoFixNormal')
```



| Illustration | AutoFixNormal |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/AutoFixNormal.png) | ![illustration for AutoFixNormal](../../material/Image/AutoFixNormal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoFixNormalXs>`
- `<$AutoFixNormalSm>`
- `<$AutoFixNormalMd>`
- `<$AutoFixNormalLg>`





## AutoFixNormal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AutoFixNormal
include('material/Image/AutoFixNormal')

' renders the element
AutoFixNormal('AutoFixNormal', 'Auto Fix Normal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AutoFixNormal
include('material/Image/AutoFixNormal')

' renders the element
AutoFixNormal('AutoFixNormal', 'Auto Fix Normal', 'an optional tech label', 'an optional description')
@enduml
```

