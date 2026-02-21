# Vitest


```text
simpleicons/V/Vitest
```

```text
include('simpleicons/V/Vitest')
```



| Illustration | Vitest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vitest.png) | ![illustration for Vitest](../../simpleicons/V/Vitest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VitestXs>`
- `<$VitestSm>`
- `<$VitestMd>`
- `<$VitestLg>`





## Vitest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vitest
include('simpleicons/V/Vitest')

' renders the element
Vitest('Vitest', 'Vitest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vitest
include('simpleicons/V/Vitest')

' renders the element
Vitest('Vitest', 'Vitest', 'an optional tech label', 'an optional description')
@enduml
```

