# Taxbuzz


```text
simpleicons-7/T/Taxbuzz
```

```text
include('simpleicons-7/T/Taxbuzz')
```



| Illustration | Taxbuzz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Taxbuzz.png) | ![illustration for Taxbuzz](../../simpleicons-7/T/Taxbuzz.Local.png) |




## Taxbuzz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Taxbuzz
include('simpleicons-7/T/Taxbuzz')

' renders the element
Taxbuzz('Taxbuzz', 'Taxbuzz', 'an optional tech label')
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

' loads the Item which embeds the element Taxbuzz
include('simpleicons-7/T/Taxbuzz')

' renders the element
Taxbuzz('Taxbuzz', 'Taxbuzz', 'an optional tech label')
@enduml
```

