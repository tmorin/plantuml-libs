# Dailydotdev


```text
simpleicons/D/Dailydotdev
```

```text
include('simpleicons/D/Dailydotdev')
```



| Illustration | Dailydotdev |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dailydotdev.png) | ![illustration for Dailydotdev](../../simpleicons/D/Dailydotdev.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DailydotdevXs>`
- `<$DailydotdevSm>`
- `<$DailydotdevMd>`
- `<$DailydotdevLg>`





## Dailydotdev

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dailydotdev
include('simpleicons/D/Dailydotdev')

' renders the element
Dailydotdev('Dailydotdev', 'Dailydotdev', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dailydotdev
include('simpleicons/D/Dailydotdev')

' renders the element
Dailydotdev('Dailydotdev', 'Dailydotdev', 'an optional tech label', 'an optional description')
@enduml
```

