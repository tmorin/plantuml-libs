# Zazzle


```text
simpleicons/Z/Zazzle
```

```text
include('simpleicons/Z/Zazzle')
```



| Illustration | Zazzle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zazzle.png) | ![illustration for Zazzle](../../simpleicons/Z/Zazzle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZazzleXs>`
- `<$ZazzleSm>`
- `<$ZazzleMd>`
- `<$ZazzleLg>`





## Zazzle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zazzle
include('simpleicons/Z/Zazzle')

' renders the element
Zazzle('Zazzle', 'Zazzle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zazzle
include('simpleicons/Z/Zazzle')

' renders the element
Zazzle('Zazzle', 'Zazzle', 'an optional tech label', 'an optional description')
@enduml
```

