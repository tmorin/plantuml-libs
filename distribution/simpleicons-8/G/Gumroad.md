# Gumroad


```text
simpleicons-8/G/Gumroad
```

```text
include('simpleicons-8/G/Gumroad')
```



| Illustration | Gumroad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gumroad.png) | ![illustration for Gumroad](../../simpleicons-8/G/Gumroad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GumroadXs>`
- `<$GumroadSm>`
- `<$GumroadMd>`
- `<$GumroadLg>`





## Gumroad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gumroad
include('simpleicons-8/G/Gumroad')

' renders the element
Gumroad('Gumroad', 'Gumroad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gumroad
include('simpleicons-8/G/Gumroad')

' renders the element
Gumroad('Gumroad', 'Gumroad', 'an optional tech label', 'an optional description')
@enduml
```

