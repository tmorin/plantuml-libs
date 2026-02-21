# PlugCirclePlus


```text
fontawesome/Solid/PlugCirclePlus
```

```text
include('fontawesome/Solid/PlugCirclePlus')
```



| Illustration | PlugCirclePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlugCirclePlus.png) | ![illustration for PlugCirclePlus](../../fontawesome/Solid/PlugCirclePlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlugCirclePlusXs>`
- `<$PlugCirclePlusSm>`
- `<$PlugCirclePlusMd>`
- `<$PlugCirclePlusLg>`





## PlugCirclePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlugCirclePlus
include('fontawesome/Solid/PlugCirclePlus')

' renders the element
PlugCirclePlus('PlugCirclePlus', 'Plug Circle Plus', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlugCirclePlus
include('fontawesome/Solid/PlugCirclePlus')

' renders the element
PlugCirclePlus('PlugCirclePlus', 'Plug Circle Plus', 'an optional tech label', 'an optional description')
@enduml
```

