# Testcafe


```text
simpleicons-8/T/Testcafe
```

```text
include('simpleicons-8/T/Testcafe')
```



| Illustration | Testcafe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Testcafe.png) | ![illustration for Testcafe](../../simpleicons-8/T/Testcafe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TestcafeXs>`
- `<$TestcafeSm>`
- `<$TestcafeMd>`
- `<$TestcafeLg>`





## Testcafe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Testcafe
include('simpleicons-8/T/Testcafe')

' renders the element
Testcafe('Testcafe', 'Testcafe', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Testcafe
include('simpleicons-8/T/Testcafe')

' renders the element
Testcafe('Testcafe', 'Testcafe', 'an optional tech label', 'an optional description')
@enduml
```

