# Tata


```text
simpleicons-5/T/Tata
```

```text
include('simpleicons-5/T/Tata')
```



| Illustration | Tata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tata.png) | ![illustration for Tata](../../simpleicons-5/T/Tata.Local.png) |




## Tata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tata
include('simpleicons-5/T/Tata')

' renders the element
Tata('Tata', 'Tata', 'an optional tech label')
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

' loads the Item which embeds the element Tata
include('simpleicons-5/T/Tata')

' renders the element
Tata('Tata', 'Tata', 'an optional tech label')
@enduml
```

