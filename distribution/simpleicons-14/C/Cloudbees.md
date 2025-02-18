# Cloudbees


```text
simpleicons-14/C/Cloudbees
```

```text
include('simpleicons-14/C/Cloudbees')
```



| Illustration | Cloudbees |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudbees.png) | ![illustration for Cloudbees](../../simpleicons-14/C/Cloudbees.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudbeesXs>`
- `<$CloudbeesSm>`
- `<$CloudbeesMd>`
- `<$CloudbeesLg>`





## Cloudbees

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudbees
include('simpleicons-14/C/Cloudbees')

' renders the element
Cloudbees('Cloudbees', 'Cloudbees', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudbees
include('simpleicons-14/C/Cloudbees')

' renders the element
Cloudbees('Cloudbees', 'Cloudbees', 'an optional tech label', 'an optional description')
@enduml
```

