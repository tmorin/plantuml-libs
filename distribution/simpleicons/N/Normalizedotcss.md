# Normalizedotcss


```text
simpleicons/N/Normalizedotcss
```

```text
include('simpleicons/N/Normalizedotcss')
```



| Illustration | Normalizedotcss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Normalizedotcss.png) | ![illustration for Normalizedotcss](../../simpleicons/N/Normalizedotcss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NormalizedotcssXs>`
- `<$NormalizedotcssSm>`
- `<$NormalizedotcssMd>`
- `<$NormalizedotcssLg>`





## Normalizedotcss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Normalizedotcss
include('simpleicons/N/Normalizedotcss')

' renders the element
Normalizedotcss('Normalizedotcss', 'Normalizedotcss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Normalizedotcss
include('simpleicons/N/Normalizedotcss')

' renders the element
Normalizedotcss('Normalizedotcss', 'Normalizedotcss', 'an optional tech label', 'an optional description')
@enduml
```

