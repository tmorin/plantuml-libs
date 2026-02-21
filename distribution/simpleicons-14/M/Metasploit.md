# Metasploit


```text
simpleicons-14/M/Metasploit
```

```text
include('simpleicons-14/M/Metasploit')
```



| Illustration | Metasploit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Metasploit.png) | ![illustration for Metasploit](../../simpleicons-14/M/Metasploit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MetasploitXs>`
- `<$MetasploitSm>`
- `<$MetasploitMd>`
- `<$MetasploitLg>`





## Metasploit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Metasploit
include('simpleicons-14/M/Metasploit')

' renders the element
Metasploit('Metasploit', 'Metasploit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Metasploit
include('simpleicons-14/M/Metasploit')

' renders the element
Metasploit('Metasploit', 'Metasploit', 'an optional tech label', 'an optional description')
@enduml
```

