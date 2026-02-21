# Vanillaextract


```text
simpleicons/V/Vanillaextract
```

```text
include('simpleicons/V/Vanillaextract')
```



| Illustration | Vanillaextract |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vanillaextract.png) | ![illustration for Vanillaextract](../../simpleicons/V/Vanillaextract.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VanillaextractXs>`
- `<$VanillaextractSm>`
- `<$VanillaextractMd>`
- `<$VanillaextractLg>`





## Vanillaextract

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vanillaextract
include('simpleicons/V/Vanillaextract')

' renders the element
Vanillaextract('Vanillaextract', 'Vanillaextract', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vanillaextract
include('simpleicons/V/Vanillaextract')

' renders the element
Vanillaextract('Vanillaextract', 'Vanillaextract', 'an optional tech label', 'an optional description')
@enduml
```

