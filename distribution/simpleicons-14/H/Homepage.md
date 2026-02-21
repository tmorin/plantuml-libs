# Homepage


```text
simpleicons-14/H/Homepage
```

```text
include('simpleicons-14/H/Homepage')
```



| Illustration | Homepage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Homepage.png) | ![illustration for Homepage](../../simpleicons-14/H/Homepage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomepageXs>`
- `<$HomepageSm>`
- `<$HomepageMd>`
- `<$HomepageLg>`





## Homepage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Homepage
include('simpleicons-14/H/Homepage')

' renders the element
Homepage('Homepage', 'Homepage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homepage
include('simpleicons-14/H/Homepage')

' renders the element
Homepage('Homepage', 'Homepage', 'an optional tech label', 'an optional description')
@enduml
```

