# Openmined


```text
simpleicons-8/O/Openmined
```

```text
include('simpleicons-8/O/Openmined')
```



| Illustration | Openmined |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Openmined.png) | ![illustration for Openmined](../../simpleicons-8/O/Openmined.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenminedXs>`
- `<$OpenminedSm>`
- `<$OpenminedMd>`
- `<$OpenminedLg>`





## Openmined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openmined
include('simpleicons-8/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openmined
include('simpleicons-8/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label', 'an optional description')
@enduml
```

