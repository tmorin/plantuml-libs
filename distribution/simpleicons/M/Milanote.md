# Milanote


```text
simpleicons/M/Milanote
```

```text
include('simpleicons/M/Milanote')
```



| Illustration | Milanote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Milanote.png) | ![illustration for Milanote](../../simpleicons/M/Milanote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MilanoteXs>`
- `<$MilanoteSm>`
- `<$MilanoteMd>`
- `<$MilanoteLg>`





## Milanote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Milanote
include('simpleicons/M/Milanote')

' renders the element
Milanote('Milanote', 'Milanote', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Milanote
include('simpleicons/M/Milanote')

' renders the element
Milanote('Milanote', 'Milanote', 'an optional tech label', 'an optional description')
@enduml
```

