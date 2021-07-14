# Vodafone


```text
simpleicons-5/V/Vodafone
```

```text
include('simpleicons-5/V/Vodafone')
```



| Illustration | Vodafone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vodafone.png) | ![illustration for Vodafone](../../simpleicons-5/V/Vodafone.Local.png) |




## Vodafone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vodafone
include('simpleicons-5/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label')
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

' loads the Item which embeds the element Vodafone
include('simpleicons-5/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label')
@enduml
```

