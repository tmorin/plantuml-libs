# Gumroad


```text
simpleicons-5/G/Gumroad
```

```text
include('simpleicons-5/G/Gumroad')
```



| Illustration | Gumroad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gumroad.png) | ![illustration for Gumroad](../../simpleicons-5/G/Gumroad.Local.png) |




## Gumroad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gumroad
include('simpleicons-5/G/Gumroad')

' renders the element
Gumroad('Gumroad', 'Gumroad', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gumroad
include('simpleicons-5/G/Gumroad')

' renders the element
Gumroad('Gumroad', 'Gumroad', 'an optional tech label')
@enduml
```

