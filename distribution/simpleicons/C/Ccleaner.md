# Ccleaner


```text
simpleicons/C/Ccleaner
```

```text
include('simpleicons/C/Ccleaner')
```



| Illustration | Ccleaner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Ccleaner.png) | ![illustration for Ccleaner](../../simpleicons/C/Ccleaner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcleanerXs>`
- `<$CcleanerSm>`
- `<$CcleanerMd>`
- `<$CcleanerLg>`





## Ccleaner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ccleaner
include('simpleicons/C/Ccleaner')

' renders the element
Ccleaner('Ccleaner', 'Ccleaner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ccleaner
include('simpleicons/C/Ccleaner')

' renders the element
Ccleaner('Ccleaner', 'Ccleaner', 'an optional tech label', 'an optional description')
@enduml
```

