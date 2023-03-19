# Justeat


```text
simpleicons-8/J/Justeat
```

```text
include('simpleicons-8/J/Justeat')
```



| Illustration | Justeat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Justeat.png) | ![illustration for Justeat](../../simpleicons-8/J/Justeat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JusteatXs>`
- `<$JusteatSm>`
- `<$JusteatMd>`
- `<$JusteatLg>`





## Justeat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Justeat
include('simpleicons-8/J/Justeat')

' renders the element
Justeat('Justeat', 'Justeat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Justeat
include('simpleicons-8/J/Justeat')

' renders the element
Justeat('Justeat', 'Justeat', 'an optional tech label', 'an optional description')
@enduml
```

