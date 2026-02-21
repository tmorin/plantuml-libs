# Thefinals


```text
simpleicons/T/Thefinals
```

```text
include('simpleicons/T/Thefinals')
```



| Illustration | Thefinals |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Thefinals.png) | ![illustration for Thefinals](../../simpleicons/T/Thefinals.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThefinalsXs>`
- `<$ThefinalsSm>`
- `<$ThefinalsMd>`
- `<$ThefinalsLg>`





## Thefinals

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thefinals
include('simpleicons/T/Thefinals')

' renders the element
Thefinals('Thefinals', 'Thefinals', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thefinals
include('simpleicons/T/Thefinals')

' renders the element
Thefinals('Thefinals', 'Thefinals', 'an optional tech label', 'an optional description')
@enduml
```

