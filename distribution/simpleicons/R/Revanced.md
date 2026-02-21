# Revanced


```text
simpleicons/R/Revanced
```

```text
include('simpleicons/R/Revanced')
```



| Illustration | Revanced |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Revanced.png) | ![illustration for Revanced](../../simpleicons/R/Revanced.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RevancedXs>`
- `<$RevancedSm>`
- `<$RevancedMd>`
- `<$RevancedLg>`





## Revanced

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Revanced
include('simpleicons/R/Revanced')

' renders the element
Revanced('Revanced', 'Revanced', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Revanced
include('simpleicons/R/Revanced')

' renders the element
Revanced('Revanced', 'Revanced', 'an optional tech label', 'an optional description')
@enduml
```

