# Stryker


```text
simpleicons/S/Stryker
```

```text
include('simpleicons/S/Stryker')
```



| Illustration | Stryker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Stryker.png) | ![illustration for Stryker](../../simpleicons/S/Stryker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StrykerXs>`
- `<$StrykerSm>`
- `<$StrykerMd>`
- `<$StrykerLg>`





## Stryker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stryker
include('simpleicons/S/Stryker')

' renders the element
Stryker('Stryker', 'Stryker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stryker
include('simpleicons/S/Stryker')

' renders the element
Stryker('Stryker', 'Stryker', 'an optional tech label', 'an optional description')
@enduml
```

