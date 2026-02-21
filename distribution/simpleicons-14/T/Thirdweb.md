# Thirdweb


```text
simpleicons-14/T/Thirdweb
```

```text
include('simpleicons-14/T/Thirdweb')
```



| Illustration | Thirdweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thirdweb.png) | ![illustration for Thirdweb](../../simpleicons-14/T/Thirdweb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThirdwebXs>`
- `<$ThirdwebSm>`
- `<$ThirdwebMd>`
- `<$ThirdwebLg>`





## Thirdweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thirdweb
include('simpleicons-14/T/Thirdweb')

' renders the element
Thirdweb('Thirdweb', 'Thirdweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thirdweb
include('simpleicons-14/T/Thirdweb')

' renders the element
Thirdweb('Thirdweb', 'Thirdweb', 'an optional tech label', 'an optional description')
@enduml
```

