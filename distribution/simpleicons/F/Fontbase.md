# Fontbase


```text
simpleicons/F/Fontbase
```

```text
include('simpleicons/F/Fontbase')
```



| Illustration | Fontbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fontbase.png) | ![illustration for Fontbase](../../simpleicons/F/Fontbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FontbaseXs>`
- `<$FontbaseSm>`
- `<$FontbaseMd>`
- `<$FontbaseLg>`





## Fontbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fontbase
include('simpleicons/F/Fontbase')

' renders the element
Fontbase('Fontbase', 'Fontbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fontbase
include('simpleicons/F/Fontbase')

' renders the element
Fontbase('Fontbase', 'Fontbase', 'an optional tech label', 'an optional description')
@enduml
```

