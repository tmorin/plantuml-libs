# Counterstrike


```text
simpleicons-8/C/Counterstrike
```

```text
include('simpleicons-8/C/Counterstrike')
```



| Illustration | Counterstrike |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Counterstrike.png) | ![illustration for Counterstrike](../../simpleicons-8/C/Counterstrike.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CounterstrikeXs>`
- `<$CounterstrikeSm>`
- `<$CounterstrikeMd>`
- `<$CounterstrikeLg>`





## Counterstrike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Counterstrike
include('simpleicons-8/C/Counterstrike')

' renders the element
Counterstrike('Counterstrike', 'Counterstrike', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Counterstrike
include('simpleicons-8/C/Counterstrike')

' renders the element
Counterstrike('Counterstrike', 'Counterstrike', 'an optional tech label', 'an optional description')
@enduml
```

