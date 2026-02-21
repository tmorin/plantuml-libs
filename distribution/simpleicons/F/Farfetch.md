# Farfetch


```text
simpleicons/F/Farfetch
```

```text
include('simpleicons/F/Farfetch')
```



| Illustration | Farfetch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Farfetch.png) | ![illustration for Farfetch](../../simpleicons/F/Farfetch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FarfetchXs>`
- `<$FarfetchSm>`
- `<$FarfetchMd>`
- `<$FarfetchLg>`





## Farfetch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Farfetch
include('simpleicons/F/Farfetch')

' renders the element
Farfetch('Farfetch', 'Farfetch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Farfetch
include('simpleicons/F/Farfetch')

' renders the element
Farfetch('Farfetch', 'Farfetch', 'an optional tech label', 'an optional description')
@enduml
```

