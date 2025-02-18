# Hackaday


```text
simpleicons-14/H/Hackaday
```

```text
include('simpleicons-14/H/Hackaday')
```



| Illustration | Hackaday |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hackaday.png) | ![illustration for Hackaday](../../simpleicons-14/H/Hackaday.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackadayXs>`
- `<$HackadaySm>`
- `<$HackadayMd>`
- `<$HackadayLg>`





## Hackaday

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hackaday
include('simpleicons-14/H/Hackaday')

' renders the element
Hackaday('Hackaday', 'Hackaday', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hackaday
include('simpleicons-14/H/Hackaday')

' renders the element
Hackaday('Hackaday', 'Hackaday', 'an optional tech label', 'an optional description')
@enduml
```

