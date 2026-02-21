# Velog


```text
simpleicons/V/Velog
```

```text
include('simpleicons/V/Velog')
```



| Illustration | Velog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Velog.png) | ![illustration for Velog](../../simpleicons/V/Velog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VelogXs>`
- `<$VelogSm>`
- `<$VelogMd>`
- `<$VelogLg>`





## Velog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Velog
include('simpleicons/V/Velog')

' renders the element
Velog('Velog', 'Velog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Velog
include('simpleicons/V/Velog')

' renders the element
Velog('Velog', 'Velog', 'an optional tech label', 'an optional description')
@enduml
```

