# Labex


```text
simpleicons/L/Labex
```

```text
include('simpleicons/L/Labex')
```



| Illustration | Labex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Labex.png) | ![illustration for Labex](../../simpleicons/L/Labex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LabexXs>`
- `<$LabexSm>`
- `<$LabexMd>`
- `<$LabexLg>`





## Labex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Labex
include('simpleicons/L/Labex')

' renders the element
Labex('Labex', 'Labex', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Labex
include('simpleicons/L/Labex')

' renders the element
Labex('Labex', 'Labex', 'an optional tech label', 'an optional description')
@enduml
```

