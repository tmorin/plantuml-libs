# Zorin


```text
simpleicons-5/Z/Zorin
```

```text
include('simpleicons-5/Z/Zorin')
```



| Illustration | Zorin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zorin.png) | ![illustration for Zorin](../../simpleicons-5/Z/Zorin.Local.png) |




## Zorin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zorin
include('simpleicons-5/Z/Zorin')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zorin
include('simpleicons-5/Z/Zorin')

' renders the element
Zorin('Zorin', 'Zorin', 'an optional tech label')
@enduml
```

