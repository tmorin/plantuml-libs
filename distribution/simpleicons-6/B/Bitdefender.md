# Bitdefender


```text
simpleicons-6/B/Bitdefender
```

```text
include('simpleicons-6/B/Bitdefender')
```



| Illustration | Bitdefender |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bitdefender.png) | ![illustration for Bitdefender](../../simpleicons-6/B/Bitdefender.Local.png) |




## Bitdefender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bitdefender
include('simpleicons-6/B/Bitdefender')

' renders the element
Bitdefender('Bitdefender', 'Bitdefender', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bitdefender
include('simpleicons-6/B/Bitdefender')

' renders the element
Bitdefender('Bitdefender', 'Bitdefender', 'an optional tech label')
@enduml
```

