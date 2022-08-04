# Adblock


```text
simpleicons-7/A/Adblock
```

```text
include('simpleicons-7/A/Adblock')
```



| Illustration | Adblock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Adblock.png) | ![illustration for Adblock](../../simpleicons-7/A/Adblock.Local.png) |




## Adblock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Adblock
include('simpleicons-7/A/Adblock')

' renders the element
Adblock('Adblock', 'Adblock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adblock
include('simpleicons-7/A/Adblock')

' renders the element
Adblock('Adblock', 'Adblock', 'an optional tech label', 'an optional description')
@enduml
```

