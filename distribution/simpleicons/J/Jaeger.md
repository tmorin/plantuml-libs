# Jaeger


```text
simpleicons/J/Jaeger
```

```text
include('simpleicons/J/Jaeger')
```



| Illustration | Jaeger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jaeger.png) | ![illustration for Jaeger](../../simpleicons/J/Jaeger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JaegerXs>`
- `<$JaegerSm>`
- `<$JaegerMd>`
- `<$JaegerLg>`





## Jaeger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jaeger
include('simpleicons/J/Jaeger')

' renders the element
Jaeger('Jaeger', 'Jaeger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jaeger
include('simpleicons/J/Jaeger')

' renders the element
Jaeger('Jaeger', 'Jaeger', 'an optional tech label', 'an optional description')
@enduml
```

