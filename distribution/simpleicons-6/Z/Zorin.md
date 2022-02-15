# Zorin


```text
simpleicons-6/Z/Zorin
```

```text
include('simpleicons-6/Z/Zorin')
```



| Illustration | Zorin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zorin.png) | ![illustration for Zorin](../../simpleicons-6/Z/Zorin.Local.png) |




## Zorin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zorin
include('simpleicons-6/Z/Zorin')

' renders the element
Zorin('Zorin', 'Zorin', 'an optional tech label')
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

' loads the Item which embeds the element Zorin
include('simpleicons-6/Z/Zorin')

' renders the element
Zorin('Zorin', 'Zorin', 'an optional tech label')
@enduml
```

