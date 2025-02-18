# Apache


```text
simpleicons-14/A/Apache
```

```text
include('simpleicons-14/A/Apache')
```



| Illustration | Apache |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apache.png) | ![illustration for Apache](../../simpleicons-14/A/Apache.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheXs>`
- `<$ApacheSm>`
- `<$ApacheMd>`
- `<$ApacheLg>`





## Apache

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apache
include('simpleicons-14/A/Apache')

' renders the element
Apache('Apache', 'Apache', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apache
include('simpleicons-14/A/Apache')

' renders the element
Apache('Apache', 'Apache', 'an optional tech label', 'an optional description')
@enduml
```

