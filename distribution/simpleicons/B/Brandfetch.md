# Brandfetch


```text
simpleicons/B/Brandfetch
```

```text
include('simpleicons/B/Brandfetch')
```



| Illustration | Brandfetch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Brandfetch.png) | ![illustration for Brandfetch](../../simpleicons/B/Brandfetch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrandfetchXs>`
- `<$BrandfetchSm>`
- `<$BrandfetchMd>`
- `<$BrandfetchLg>`





## Brandfetch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Brandfetch
include('simpleicons/B/Brandfetch')

' renders the element
Brandfetch('Brandfetch', 'Brandfetch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brandfetch
include('simpleicons/B/Brandfetch')

' renders the element
Brandfetch('Brandfetch', 'Brandfetch', 'an optional tech label', 'an optional description')
@enduml
```

