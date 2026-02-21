# Foundryvirtualtabletop


```text
simpleicons-14/F/Foundryvirtualtabletop
```

```text
include('simpleicons-14/F/Foundryvirtualtabletop')
```



| Illustration | Foundryvirtualtabletop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Foundryvirtualtabletop.png) | ![illustration for Foundryvirtualtabletop](../../simpleicons-14/F/Foundryvirtualtabletop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoundryvirtualtabletopXs>`
- `<$FoundryvirtualtabletopSm>`
- `<$FoundryvirtualtabletopMd>`
- `<$FoundryvirtualtabletopLg>`





## Foundryvirtualtabletop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Foundryvirtualtabletop
include('simpleicons-14/F/Foundryvirtualtabletop')

' renders the element
Foundryvirtualtabletop('Foundryvirtualtabletop', 'Foundryvirtualtabletop', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Foundryvirtualtabletop
include('simpleicons-14/F/Foundryvirtualtabletop')

' renders the element
Foundryvirtualtabletop('Foundryvirtualtabletop', 'Foundryvirtualtabletop', 'an optional tech label', 'an optional description')
@enduml
```

