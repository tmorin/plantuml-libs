# Hashcat


```text
simpleicons-14/H/Hashcat
```

```text
include('simpleicons-14/H/Hashcat')
```



| Illustration | Hashcat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hashcat.png) | ![illustration for Hashcat](../../simpleicons-14/H/Hashcat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HashcatXs>`
- `<$HashcatSm>`
- `<$HashcatMd>`
- `<$HashcatLg>`





## Hashcat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hashcat
include('simpleicons-14/H/Hashcat')

' renders the element
Hashcat('Hashcat', 'Hashcat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hashcat
include('simpleicons-14/H/Hashcat')

' renders the element
Hashcat('Hashcat', 'Hashcat', 'an optional tech label', 'an optional description')
@enduml
```

