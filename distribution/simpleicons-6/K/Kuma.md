# Kuma


```text
simpleicons-6/K/Kuma
```

```text
include('simpleicons-6/K/Kuma')
```



| Illustration | Kuma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kuma.png) | ![illustration for Kuma](../../simpleicons-6/K/Kuma.Local.png) |




## Kuma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kuma
include('simpleicons-6/K/Kuma')

' renders the element
Kuma('Kuma', 'Kuma', 'an optional tech label')
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

' loads the Item which embeds the element Kuma
include('simpleicons-6/K/Kuma')

' renders the element
Kuma('Kuma', 'Kuma', 'an optional tech label')
@enduml
```

