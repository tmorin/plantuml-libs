# Googleadsense


```text
simpleicons-8/G/Googleadsense
```

```text
include('simpleicons-8/G/Googleadsense')
```



| Illustration | Googleadsense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleadsense.png) | ![illustration for Googleadsense](../../simpleicons-8/G/Googleadsense.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleadsenseXs>`
- `<$GoogleadsenseSm>`
- `<$GoogleadsenseMd>`
- `<$GoogleadsenseLg>`





## Googleadsense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleadsense
include('simpleicons-8/G/Googleadsense')

' renders the element
Googleadsense('Googleadsense', 'Googleadsense', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleadsense
include('simpleicons-8/G/Googleadsense')

' renders the element
Googleadsense('Googleadsense', 'Googleadsense', 'an optional tech label', 'an optional description')
@enduml
```

