# Bunnydotnet


```text
simpleicons/B/Bunnydotnet
```

```text
include('simpleicons/B/Bunnydotnet')
```



| Illustration | Bunnydotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bunnydotnet.png) | ![illustration for Bunnydotnet](../../simpleicons/B/Bunnydotnet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BunnydotnetXs>`
- `<$BunnydotnetSm>`
- `<$BunnydotnetMd>`
- `<$BunnydotnetLg>`





## Bunnydotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bunnydotnet
include('simpleicons/B/Bunnydotnet')

' renders the element
Bunnydotnet('Bunnydotnet', 'Bunnydotnet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bunnydotnet
include('simpleicons/B/Bunnydotnet')

' renders the element
Bunnydotnet('Bunnydotnet', 'Bunnydotnet', 'an optional tech label', 'an optional description')
@enduml
```

