# Unocss


```text
simpleicons-7/U/Unocss
```

```text
include('simpleicons-7/U/Unocss')
```



| Illustration | Unocss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Unocss.png) | ![illustration for Unocss](../../simpleicons-7/U/Unocss.Local.png) |




## Unocss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Unocss
include('simpleicons-7/U/Unocss')

' renders the element
Unocss('Unocss', 'Unocss', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Unocss
include('simpleicons-7/U/Unocss')

' renders the element
Unocss('Unocss', 'Unocss', 'an optional tech label')
@enduml
```

