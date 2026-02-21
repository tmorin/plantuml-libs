# Miraheze


```text
simpleicons/M/Miraheze
```

```text
include('simpleicons/M/Miraheze')
```



| Illustration | Miraheze |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Miraheze.png) | ![illustration for Miraheze](../../simpleicons/M/Miraheze.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MirahezeXs>`
- `<$MirahezeSm>`
- `<$MirahezeMd>`
- `<$MirahezeLg>`





## Miraheze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Miraheze
include('simpleicons/M/Miraheze')

' renders the element
Miraheze('Miraheze', 'Miraheze', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Miraheze
include('simpleicons/M/Miraheze')

' renders the element
Miraheze('Miraheze', 'Miraheze', 'an optional tech label', 'an optional description')
@enduml
```

