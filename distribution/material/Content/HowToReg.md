# HowToReg


```text
material/Content/HowToReg
```

```text
include('material/Content/HowToReg')
```



| Illustration | HowToReg |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/HowToReg.png) | ![illustration for HowToReg](../../material/Content/HowToReg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HowToRegXs>`
- `<$HowToRegSm>`
- `<$HowToRegMd>`
- `<$HowToRegLg>`





## HowToReg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HowToReg
include('material/Content/HowToReg')

' renders the element
HowToReg('HowToReg', 'How To Reg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HowToReg
include('material/Content/HowToReg')

' renders the element
HowToReg('HowToReg', 'How To Reg', 'an optional tech label', 'an optional description')
@enduml
```

