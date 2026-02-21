# Fireflyiii


```text
simpleicons/F/Fireflyiii
```

```text
include('simpleicons/F/Fireflyiii')
```



| Illustration | Fireflyiii |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fireflyiii.png) | ![illustration for Fireflyiii](../../simpleicons/F/Fireflyiii.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FireflyiiiXs>`
- `<$FireflyiiiSm>`
- `<$FireflyiiiMd>`
- `<$FireflyiiiLg>`





## Fireflyiii

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fireflyiii
include('simpleicons/F/Fireflyiii')

' renders the element
Fireflyiii('Fireflyiii', 'Fireflyiii', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fireflyiii
include('simpleicons/F/Fireflyiii')

' renders the element
Fireflyiii('Fireflyiii', 'Fireflyiii', 'an optional tech label', 'an optional description')
@enduml
```

