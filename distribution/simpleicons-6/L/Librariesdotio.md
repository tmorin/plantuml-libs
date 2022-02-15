# Librariesdotio


```text
simpleicons-6/L/Librariesdotio
```

```text
include('simpleicons-6/L/Librariesdotio')
```



| Illustration | Librariesdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Librariesdotio.png) | ![illustration for Librariesdotio](../../simpleicons-6/L/Librariesdotio.Local.png) |




## Librariesdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Librariesdotio
include('simpleicons-6/L/Librariesdotio')

' renders the element
Librariesdotio('Librariesdotio', 'Librariesdotio', 'an optional tech label')
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

' loads the Item which embeds the element Librariesdotio
include('simpleicons-6/L/Librariesdotio')

' renders the element
Librariesdotio('Librariesdotio', 'Librariesdotio', 'an optional tech label')
@enduml
```

