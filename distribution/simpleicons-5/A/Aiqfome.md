# Aiqfome


```text
simpleicons-5/A/Aiqfome
```

```text
include('simpleicons-5/A/Aiqfome')
```



| Illustration | Aiqfome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aiqfome.png) | ![illustration for Aiqfome](../../simpleicons-5/A/Aiqfome.Local.png) |




## Aiqfome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aiqfome
include('simpleicons-5/A/Aiqfome')

' renders the element
Aiqfome('Aiqfome', 'Aiqfome', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aiqfome
include('simpleicons-5/A/Aiqfome')

' renders the element
Aiqfome('Aiqfome', 'Aiqfome', 'an optional tech label')
@enduml
```

