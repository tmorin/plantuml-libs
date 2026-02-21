# Doxygen


```text
simpleicons/D/Doxygen
```

```text
include('simpleicons/D/Doxygen')
```



| Illustration | Doxygen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Doxygen.png) | ![illustration for Doxygen](../../simpleicons/D/Doxygen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoxygenXs>`
- `<$DoxygenSm>`
- `<$DoxygenMd>`
- `<$DoxygenLg>`





## Doxygen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Doxygen
include('simpleicons/D/Doxygen')

' renders the element
Doxygen('Doxygen', 'Doxygen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Doxygen
include('simpleicons/D/Doxygen')

' renders the element
Doxygen('Doxygen', 'Doxygen', 'an optional tech label', 'an optional description')
@enduml
```

